import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Alert from '@/components/alert'

export const useRedirectionFlag = () => {
  const router = useRouter()
  const { query, pathname } = router
  const { redirectionFlag } = query

  useEffect(() => {
    if (!!redirectionFlag) {
      Alert({ type: 'error', message: 'Not enough permissions!!' }).then(() => {
        const params = query
        delete params.redirectionFlag
        router.replace({ pathname, query: params }, undefined, { shallow: true }).then()
      })
    }
  })
}