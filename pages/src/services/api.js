

const http = async (url, options) => {
  try {
    let response 
    
    if(!options) response = await fetch(`${url}`);

    if(options) response = await fetch(`${url}`, options);

    response = await response?.json();

    return response;

    } 
    catch(err){
      console.log(err)
    }
  }

export default http