import { CustomShape } from 'mo-js';

export class MojoPencilShape extends CustomShape {
	getShape() {
		return `<path d="M99.2,43.8L56.9,1.5c-2-2-5.3-2-7.3,0L7.4,43.8c-0.5,0.5-0.8,1-1,1.6c-0.1,0.2-0.1,0.4-0.2,0.6
	c-0.1,0.3-0.2,0.5-0.2,0.8L0,95c-0.2,1.6,0.4,3.1,1.5,4.3c1,1,2.3,1.5,3.6,1.5c0.2,0,0.4,0,0.6,0l48.2-5.9c0.3,0,0.5-0.2,0.8-0.2
	c0.2-0.1,0.4-0.1,0.6-0.2c0.6-0.3,1.1-0.6,1.6-1l42.3-42.3c1-1,1.5-2.3,1.5-3.6C100.8,46.1,100.2,44.8,99.2,43.8z M14.8,58.5
	l27.4,27.4L11,89.7L14.8,58.5z M53.3,82.5l-35-35l35-35l35,35L53.3,82.5z"/>`;
	}
}