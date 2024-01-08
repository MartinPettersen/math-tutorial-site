import GoogleProvider from "next-auth/providers/google";

    type User = {
      role: string
    }

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