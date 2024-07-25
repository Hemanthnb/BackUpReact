// styles.ts
import { SxProps, Theme } from '@mui/system';

const navbar: SxProps<Theme> = {
    padding: '2px',
    margin: '0px',
    backgroundColor:'#eeeeee'
}
const boxStylesRow: SxProps<Theme> = {
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center'
};


export { navbar as header, boxStylesRow };
