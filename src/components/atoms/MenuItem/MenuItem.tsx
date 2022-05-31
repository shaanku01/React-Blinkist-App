import Typography from '../Typography/Typography';
import Styles from './MenuItem.module.css';


interface Props{
    content:string;
    emoji : React.FC;
}

const MenuItem = (props:Props)=>{

    return(
        <div className={Styles.root} data-testid="menu-Item">
		            <props.emoji data-testid="emoji" />
                    <div data-testid="menuText" className={Styles.text}><Typography variant={"body2"} content={props.content} styles={{marginTop:"0px",marginBottom:'15px',marginLeft:"5px"}}/></div>
                    </div>
    )
}

export default MenuItem