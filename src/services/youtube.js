import useSWR from "swr"

import fetcher from "./fetcher"

const useYouTube = () => {
  const { data, error } = useSWR("/api/youtube", fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useYouTube
