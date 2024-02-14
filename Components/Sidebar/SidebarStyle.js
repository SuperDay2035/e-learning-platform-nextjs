import styled from "styled-components";


const SidebarStyle = styled.div `

    .sidebar{
        padding: 1rem;
        width: 380px;
        height: 100vh;
        background-color: #E5F7FF;
        transition: 0.3s;
        
    }
    



    .sidebar.hide{
            width: 0;
            padding: 0;
     
            .selects{
               opacity: 0; 
                
                .select{
                    opacity: 0;
                }
            }
           
            .close{
                opacity: 0;
            }

        
        
    }
    
    .Logo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .logo{
      
            width: 15rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        
        .close{
            font-size: 3rem;
        }
    }
    


        

    
    .selects{
        margin-top: 3rem;
        
        
    
        .select{
            display: flex;
            align-items: center;
            padding: 1rem 0.5rem;
            margin-top:15px;
            
            .dash{
                font-size: 2.3rem;
                color: #7660E3;
            
            }
            
            h2{
                color: #7660E3;
                font-size: 1.8rem;
                margin-left: 1rem;
            }
        }
        

        .select.active{
            background: rgb(0,212,255);
            background: linear-gradient(90deg, rgba(0,212,255,1) 27%, rgba(106,0,254,1) 100%);

            .dash, h2{
                color: white;
            }

        }
        
        .select:hover{
            background: rgb(0,212,255);
            background: linear-gradient(90deg, rgba(0,212,255,1) 27%, rgba(106,0,254,1) 100%);

            .dash, h2{
                color: white;
            }

        }
    
    }
    
   
 
    
    .share{
        margin-top: 2rem;
        img{
            width: 100%;
            height: auto;
        }
    }
    

    

`

export default SidebarStyle;