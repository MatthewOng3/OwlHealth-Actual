export async function summariseConsultation(prompt: string){
    try {
        const res = await fetch('api/summarise', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
        
        const data = await res.json();

        if (data.error) {
          return (`Error: ${data.error}`);
        } else {
          return (data.text);  
        }
      } catch (error) {
        return (`Error occurred during API call: ${error}`);
      } 
}