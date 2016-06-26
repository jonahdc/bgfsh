import React from 'react'
import ReactDOM from 'react-dom'
import { reduxForm } from 'redux-form'

class RegimenForm extends React.Component {
  render(){
    const {
      fields: { title, description },
      handleSubmit,
      resetForm,
      submitting
    } = this.props
    return (
      <div class="widget">
      <h3 class="light-header">New Observation</h3>
      <form class="entry" onSubmit={handleSubmit}>
        <input type="text" name="title" class="entry__title" placeholder="Title" {...title} />
       <textarea name="desc" class="entry__desc" cols="40" rows="5" placeholder="Description" {...description}></textarea>

<button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}

RegimenForm = reduxForm({
  form: 'Regimen',
  fields: ['title','description']
})(RegimenForm);

export default RegimenForm;
