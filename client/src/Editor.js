import ReactQuill from "react-quill"; // Import ReactQuill component for rich text editing

/**
 * Editor component for rich text editing using ReactQuill.
 * @param {string} value - The current value of the editor.
 * @param {function} onChange - Function to handle changes in the editor content.
 * @returns {JSX.Element} - Returns the Editor component JSX.
 */
export default function Editor({ value, onChange }) {
  // Define modules for toolbar customization
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  // Render the Editor component 
  return (
    <div className="content">
      {/* ReactQuill component for rich text editing */}
      <ReactQuill
        value={value} // Current value of the editor
        theme={'snow'} // Theme for the editor
        onChange={onChange} // Function to handle changes in the editor content
        modules={modules} // Modules for toolbar customization
      />
    </div>
  );
}
