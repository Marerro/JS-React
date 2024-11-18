import '../Input.css';

function Input() {
    return (
        <>
        <form />
  <label htmlFor="fname" className='label_mod'></label>
  <input type="text" id="fname" name="fname" placeholder='First name'/>
  <label htmlFor="lname" className='label_mod'></label>
  <input type="text" id="lname" name="lname" placeholder='Last name'/>
  <label htmlFor="email" className='label_mod'></label>
  <input type="text" id="email" name="email" placeholder='Email'/>
   <br/><br/>
  <input type="submit" value="Subscribe" className='button'/>
    <form/>
        </>
    )
}

export default Input;