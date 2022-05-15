import { Directive, DoCheck, EmbeddedViewRef, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[ngBookFor]'
})
export class NgBookForDirective implements DoCheck {
  private differ: IterableDiffer<any> | undefined;
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();
  private items: any[] = [];

  @Input() set ngBookForOf(items: any) {
    this.items = items;
    if (this.items && !this.differ) {
      this.differ = this.differs.find(items).create();
    }
  }

  constructor(  private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>,
    private differs: IterableDiffers) {
  }

  ngDoCheck(): void {
    const changes = this.differ?.diff(this.items);
    if (changes) {
    

      changes.forEachAddedItem(change => {
        const view = this.viewContainer.createEmbeddedView(
          this.template,
          { $implicit: change.item }
        );
        this.views.set(change.item, view);
      });

      changes.forEachRemovedItem((r: any) => {
        const view = this.views.get(r.item);
        const idx = this.viewContainer.indexOf(<ViewRef>view);
        this.viewContainer.remove(idx);

      })
    }
  }

}
