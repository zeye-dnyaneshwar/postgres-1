const  createDepartmentValidator=(params) =>{
    const requiredFields = ["name", "code"];
    let isValid = true;
    let errorMessage = "";
    if (!requiredFields.every((field) => (Object.keys(params).includes(field)))) {
      isValid = false;
      errorMessage += "Mandatory fields are missing.";
    }
    return { isValid, errorMessage, params };
}

module.exports={createDepartmentValidator}