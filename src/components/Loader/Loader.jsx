import { MutatingDots } from 'react-loader-spinner'
import { LoaderBox } from './Loader.styled'

export const Loader = ()=>{
    return(<>
    <LoaderBox>
    <MutatingDots 
  height="100"
  width="100"
  color="#471ca9"
  secondaryColor= '#471ca9'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  visible={true}
 /></LoaderBox>
    </>)
}

