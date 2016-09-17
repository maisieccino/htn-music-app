import React from 'react';
import $ from 'jquery';
import jQuery from 'query';
import jQuery-ui from 'jquery-ui';
import { connect } from 'react-redux';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import { getAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    excitement: state.excitement
  }
}

let Upload = ({ excitement, dispatch }) => {
  return (
    <div>
      <h2>UPLOAD TEST{'!'.repeat(excitement)}</h2>
      <button onClick={ () => dispatch(getAction()) }>Upload test</button>
    </div>
  );
}

Upload.propTypes = {
  excitement: React.PropTypes.number.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

Upload = connect(mapStateToProps)(Upload);

export default Upload;

/*

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
*/

