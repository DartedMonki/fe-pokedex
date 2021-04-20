import { useHistory } from 'react-router'

const useCustom = () => {
  const history = useHistory()

  const handleBack = () => {
    history.push(`/`)
  }

  return {
    handler: {
      handleBack,
    },
  }
}

export default useCustom
