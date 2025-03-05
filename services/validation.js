export function validateForm(data) {
     const errors = [];

     if (!data.name || data.name.trim() === "") 
     {
          errors.push("Please input a name, and include no digits");
     }
     
     if (!data.title || data.title.trim() === "")
     {
          errors.push("Please input a title");
     }

     if (!data.message || data.message.trim().length < 10)
     {
          errors.push("Please input a message with more than 10 characters");
     }

     return {
          isValid: errors.length === 0,
          errors
     }
};