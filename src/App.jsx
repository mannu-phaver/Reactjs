import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberCard from './Components/TeamMemberCard'
import { team } from './Data/Data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {
      team.map(member =>{
        // console.log(member)
        return <MemberCard id={member.id} name={member.name} role={member.role}/>
      })
    }
      {/* // <MemberCard name="krishna" role="developer"/> */}
    </>
  )
}

export default App
