// rnbc
import { ImageBackground } from 'react-native';
// Precisa criar um @type 'declare module '*.png'" para remover o erro do typescript
import backgroundImg from '../../assets/background-galaxy.png';
import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}
//teste
export function Background({ children }:Props) {
  return (
    <ImageBackground 
        source={backgroundImg}
        style={styles.container}
        defaultSource={backgroundImg} // imagem padrão => memoriza para agilizar o carregamento
    >
        { children }
    </ImageBackground>
  );
}