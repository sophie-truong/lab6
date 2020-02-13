'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	console.log("the url " + window.location.href);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// result is a string
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	// cannot do "idNumber because it'll just be a string"

	console.log("User clicked on project " + idNumber);
	$.get("/project/" + idNumber, addProject);
	console.log("http://localhost:3000/project/" + idNumber);
}

function addProject(result) {
	console.log(result);
	var getId = result['id'];
	// id in "" b/c looking for word and that's a string!
	console.log("id: " + getId);
	var projectHTML =
    '<p>' + result['title'] + '</p>' +
    '<p>' + result['date'] + '</p>' +
    '<img src="' + result['image'] + '" class="detailsImage">' + 
    '<p>' + result['summary'] + '</p>';
	$("#project" + getId + " .details").html(projectHTML);
	// #project bc project1 is an ID
}

