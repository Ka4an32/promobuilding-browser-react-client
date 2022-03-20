import { useLocation } from 'react-router-dom'

const useGetParametr = (name: string) => {
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  return query.get(name)
}

export default useGetParametr
