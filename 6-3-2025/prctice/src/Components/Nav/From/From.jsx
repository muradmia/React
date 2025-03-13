import React from 'react'

const From = () => {
    const submitForm = (e)=> {
        e.preventDefault();
        console.log(e.target.text.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }
  return (
    <div>
        <div className="form" onSubmit={submitForm}>
            <form>
                <input type='text' name="text"/><br/>
                <input type='email' name="email"/><br/>
                <input type='password' name="password"/><br/>
                <input  type="submit" value="submit" />
            </form>
        </div>
    </div>
  )
}

export default From