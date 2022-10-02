import NetflixLogo from "../../assets/images/Netflix_Logo_RGB.png";
import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'
import { useScrollY } from "../Hooks/useScrollY";

function Navbar(props) {
    const [scrollY] = useScrollY()

    return (
        <Navigation
            style={scrollY  < 50 ? {backgroundColor:'transparent'} : {backgroundColor:'var(--color-background);'}}
        >
            <div className="navContainer">
                <div className="logo">
                    <img src={NetflixLogo} alt='' />
                </div>
                <div className="navSearch">
                    <MdSearch className="iconSearch" />
                    <input type="text" placeholder="input title,genres,people" />
                </div>
            </div>
        </Navigation>
    )
}

export default Navbar;

const Navigation = styled.div`
    width:100%;
    height:80px;
    position:fixed;
    top:0;
    left:0;
    z-index:10;

    @media only screen and (max-width:600px){
        height:100px;
    }

    .navContainer{
        background-color:transparent;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        height:100%;
        flex-direction:row;

        @media only screen and (max-width:600px){
            flex-direction:row;
        }
        @media only screen and (max-width:450px){
            height:50%;
            justify-content:space-between;
        }

        .logo{
            width:120px;
            cursor:pointer;
            img{
                width:100%;
            }
            @media only screen and (max-width:450px){
                width:80px;
            }
        }
        .navSearch{
            color:var(--color-white);
            padding-right:20px;
            display:flex;
            justify-content:flex-end;
           
            &:hover .iconSearch{
                color:var(--color-white);
            }
            .iconSearch{
                width:20px;
                height:20px;
                cursor:pointer;
                transform:translateX(24px) translateY(10px);
                color:#bbb;
               
                
            }
            input{
                font-size:14px;
                border:1px solid #fff;
                color:white;
                outline:none;
                background:none;
                width:0;
                padding:10px;
                cursor:pointer;
                opacity:0;
                @media only screen and (max-width:450px){
                    
                    
                }
                &:focus{
                    padding-left:26px;
                    width:80%;
                    cursor:text;
                    opacity:1;
                    transition:1s;
                    border-radius:4px
                }
            }
        }

    }
    
`;