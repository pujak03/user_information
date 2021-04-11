import  React  from "react";

const Contact=() =>{

    return(
        <div className="container">
            <div className="py-4">
                <h1>contact Page</h1>
            
                <form >
  <div className="form-group">
  <label htmlFor="exampleInputName">Name</label><br></br>
    <input type="email" className="form-control" id="exampleInputName"  placeholder="Enter name" />
    
    </div>
    
    <div className="form-group">
  <label htmlFor="exampleInputUserName">UserName</label><br></br>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder= "Enter username" />
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label><br></br>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPhone">Phone</label><br></br>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter phone" />
    </div>  
  <button type="submit" name="btn btn-primary">Submit</button>
</form>
            </div>
            </div>
        
    );
};
export default Contact;