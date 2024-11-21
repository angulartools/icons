import { Component, Input} from '@angular/core';
import { FaIconComponent, SizeProp } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faCopyright } from '@fortawesome/free-solid-svg-icons/faCopyright';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

//import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
//import { faHeart as frHeart } from '@fortawesome/free-regular-svg-icons/faHeart';

@Component({
    selector: 'lib-icons',
    templateUrl: './icons.component.html',
    standalone: true,
    imports: [FaIconComponent]
})
export class IconeComponent {

  icon;

  @Input() tamanho: SizeProp = 'sm';

  @Input()
  set tipo (value: string) {
    switch (value) {
      case 'adicionar':
        this.icon = faPlus;
        break;
      case 'seta-voltar':
        this.icon = faChevronLeft;
        break;
      case 'check':
        this.icon = faCheck;
        break;
      case 'sobre':
        this.icon = faInfoCircle;
        break;
      case 'senha':
        this.icon = faKey;
        break;
      case 'logout':
        this.icon = faSignOutAlt;
        break;
      case 'copyright':
        this.icon = faCopyright;
        break;
      case 'atualizar':
        this.icon = faSyncAlt;
        break;
      case 'manual':
        this.icon = faBook;
        break;
      case 'manifesto':
        this.icon = faBookmark;
        break;
      case 'user':
        this.icon = faUser;
        break;
    }
  }
  constructor() {}
}
