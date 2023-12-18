import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from './SearchField'

describe('<SearchField />', () => {
    describe('clicking the search field', () => {
        async function clickSearch() {
            const user = userEvent.setup();

            render(<SearchField />);

            await user.type(
                screen.getByTestId('search'),
                'see',
            );
            await user.click(screen.getByTestId('search'));
        }

        it('clears the search field', async () => {
            await clickSearch();
            expect(screen.getByTestId('search').value).toEqual('');
        })

    })
})