import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() { 
		console.log("Initializing...");
  }
	
  connect() { 
	  console.log("Connecting w/ Stimulus!");
  }

  reset() {
    this.element.reset()
  }
}