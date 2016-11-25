import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from '././dynamic-form-component/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormTimelineItemComponent } from './dynamic-form-timeline-item/dynamic-form-timeline-item.component';
import { DynamicFormQuestionCounterComponent } from './dynamic-form-question-counter/dynamic-form-question-counter.component';
import { DynamicFormQuestionDateComponent } from './dynamic-form-question-date/dynamic-form-question-date.component';
import { DynamicFormDropdownModule } from './dynamic-form-question-dropdown/dynamic-form-question-dropdown.module';
import { DynamicFormOptionModule } from './dynamic-form-question-option/dynamic-form-question-option.module';
import { DynamicFormQuestionAutocompleteModule } from './dynamic-form-question-autocomplete/dynamic-form-question-autocomplete.module';
import { DynamicFormQuestionNumberSliderModule } from './dynamic-form-question-number-slider/dynamic-form-question-number-slider.module';
import { DynamicFormQuestionRadioModule } from './dynamic-form-question-radio-module/dynamic-form-question-radio.module';
import { DynamicFormDirectivesModule} from './directives/dynamic-form-directives';
@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		DynamicFormDropdownModule,
		DynamicFormOptionModule,
		DynamicFormQuestionAutocompleteModule,
		DynamicFormQuestionNumberSliderModule,
		DynamicFormQuestionRadioModule,
		DynamicFormDirectivesModule
	],
	declarations: [
		DynamicFormComponent,
		DynamicFormQuestionComponent,
		DynamicFormTimelineItemComponent,
		DynamicFormQuestionCounterComponent,
		DynamicFormQuestionDateComponent,
	],
	exports: [
		DynamicFormComponent,
		DynamicFormQuestionComponent,
		DynamicFormTimelineItemComponent,
		DynamicFormQuestionCounterComponent,
		DynamicFormQuestionDateComponent,
	]
})
export class DynamicFormModule { }
