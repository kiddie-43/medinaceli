import { createUseStyles } from 'react-jss'
export const PopUpStyle = createUseStyles({
  actions: {
    display: "flex",
    justifyContent: "end",
    gap: 30,
    marginTop: 30
  },
  contenr: {
    height: "100%",
    marginTop: 15
  }, 
  popUpConfirmationContent:{
    display:"flex", 
    gap:20, 
    alignItems:"center",
    fontSize:"1.5rem"
  }
})