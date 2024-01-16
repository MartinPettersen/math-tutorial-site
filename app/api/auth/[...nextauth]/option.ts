import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(model)/User";
import bcrypt from "bcrypt"


// eslint-disable-next-line import/prefer-default-export
export const option = {
    providers: [
        GoogleProvider({
            profile(profile) {
                const userRole = "Google User"
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "text",
                    placeholder: "your-email",
                },
                password: {
                    label: "password:",
                    type: "password",
                    placeholder: "your-password",
                },
            },
            async authorize(credentials){
                try {
                    const foundUser = await User.findOne({email: credentials.email}).lean().exec();
                    console.log("test")
                    if(foundUser){
                        console.log("User exists")
                        const match = await bcrypt.compare(credentials?.password, foundUser.password)
                    
                        if ( match ) {
                            console.log("matching password")
                            delete foundUser.password
                            return foundUser;
                        }
                    }


                } catch ( error) {
                    console.log(error);
                }
                return null;
            }
        }),
    ],
    callbacks: {
        async jwt({token, user}: any) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({session, token}: any) {
            if (session?.user) {
                session.user.role = token.role 
            }
            return session
        }
    }
}