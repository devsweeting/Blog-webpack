import { blog, post } from './blogger';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$('#flashMessage').hide()

$('#previewButton').click(function() {
 const title = $('#blogTitleInput').val();
 const content = $('#blogContentInput').val()
 $('#blogTitlePreview').text(title);
 $('#blogContentPreview').html(content);

  $('#flashMessage')
  .slideDown(500)
  .delay(3000)
  .slideUp(500);
});


$('#postButton').click(function() {
 const title = $('#blogTitleInput').val();
 const content = $('#blogContentInput').val();
 let newPost = new post(title, content);
 $('.blog-posts').append('<div class="well"<h2>' + newPost.title + '</h2><p>' + newPost.content + '</p></div>');


  $('#flashMessage')
  .slideDown(500)
  .delay(3000)
  .slideUp(500);
});
