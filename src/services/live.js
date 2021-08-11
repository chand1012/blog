import useSWR from 'swr';

import fetcher from './fetcher';

const useLive = () => {
    const { data, error } = useSWR('/api/live', fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
};

export { useLive };