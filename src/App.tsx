import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Root from './routes/Root';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import FilmsPage from './routes/FilmsPage/FilmsPage';
import PeoplePage from './routes/PeoplePage/PeoplePage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorMessage />,
        children: [
            {
                path: 'films',
                element: <FilmsPage />,
            },
            {
                path: 'people',
                element: <PeoplePage />,
            },
        ],
    },
]);

const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
