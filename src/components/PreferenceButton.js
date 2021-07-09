
function PreferenceButton(props){  
    return(
        <div class="form-field">
          <label class="label-text" for={props.name}>{props.name}</label>
          <select id={props.name}>
            <option value="none" selected disabled hidden>Select an Option</option>
            <option value="front-end-developer">Front End Developer</option>
            <option value="back-end-developer">Back End Developer</option>
            <option value="designer">Designer</option>
            <option value="content-writer">Content Writer</option>
            <option value="video-editor">Video Editor</option>
            <option value="business-planning">Business Planning</option>
          </select>
        </div>
    );
}

export default PreferenceButton;