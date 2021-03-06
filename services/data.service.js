
user = {
  1000: { acno: 1000, username: "Akhil", password: "userone", balance: 2000, transaction: [] },
  1001: { acno: 1001, username: "Anil", password: "usertwo", balance: 3000, transaction: [] },
  1002: { acno: 1002, username: "Akhila", password: "userthree", balance: 1000, transaction: [] },
  1003: { acno: 1003, username: "Neena", password: "userfour", balance: 4000, transaction: [] },
  1004: { acno: 1004, username: "Susha", password: "userfive", balance: 5000, transaction: [] }
}

const register = (acno, username, password) => {
  console.log("Register Called");

  // let accDetails = user

  if (acno in user) {

    return {
      statusCode: 422,
      status: false,
      message: "User already exists..!! Please log in...!! "
    }
  }
  else {
    user[acno] = {
      acno,
      username,
      password,
      balance: 0,
      transaction: []
    }

    return {
      statusCode: 200,
      status: true,
      message: "Registered Successfullly...!!!"
    }
  }

}


//Login function

const login = (acno, password) => {
  console.log("Login called");
  // let accDetails =  this.user; 
  if (acno in user) {
    if (password == user[acno]["password"]) {
      //this.currentUser= accDetails[acno]["username"]
      // console.log(this.currentUser);
      //this.currentAcc=acno
      //this.saveDetails()
      return {
        statusCode: 200,
        status: true,
        message: "User logged in successfully...!!"

      }
    }
    else {

      return {
        statusCode: 422,
        status: false,
        message: "Incorrect password"
      }
    }
  }
  else {
    return {
      statusCode: 422,
      status: false,
      message: "Incorrect Username/accno"

    }


  }
}

//Deposit

const deposit = (acno, password, amount) => {

  var amt = parseInt(amount)

  //let accDetails = this.user
  if (acno in user) {
    if (password == user[acno]["password"]) {
      user[acno]["balance"] += amt

      user[acno].transaction.push({
        amt: amt,
        type: "CREDIT "
      })

      //this.saveDetails()
      
      
      return{
        statusCode:200,
        status: true,
        message: amount+"deposited successfully and new balance is"+ user[acno]["balance"]
      }
    }

    else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect password...!!!!"

      }
    }
  }

  else {
    return {
      statusCode: 422,
      status: false,
      message: "Invalid User...!!!1"

    }
  }
}

//Withdraw function
const withdraw= (acno, password, amount)=> {

  var amt = parseInt(amount)

  //let accDetails = this.user
  if (acno in user){
    if( password == user[acno]["password"]){
      if(user[acno]["balance"] >amt) { 
      user[acno]["balance"]-= amt

      user[acno].transaction.push({
        amt:amt,
        type: "DEBIT "
      } )
    //  this.saveDetails() 
      //return accDetails[acno]["balance"]
      return {
        statusCode:200,
        status: true,
        message: amount+" withdrawn successfully and new balance is"+ user[acno]["balance"]
      }
    }
    else {
     
      return {
        statusCode: 422,
       status: false,
       message: "Insufficient Balance..!!!!"
       }
      
    }
    }
    else { 
      return {
        statusCode: 422,
       status: false,
       message: "Incorrect Password..!!!!"
       }
    }
  }
  else {
    return {
      statusCode: 422,
     status: false,
     message: "Invalid User..!!!!"
     }
  }
}



module.exports = {
  register,
  login,
  deposit,
  withdraw 
}


