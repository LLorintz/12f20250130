export const fetchUsers=async()=>{
    try {
      const response = await fetch('https://randomuser.me/api/?results=10')
      if (!response.ok) {
        throw new Error;
      }
      const data = await response.json()
      console.log(data.results)
        return data.results
        
    } catch (error) {
      console.log('error:', error)      
    }
  }