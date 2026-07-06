import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { FaIconComponent, SizeProp } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

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

@Component({
  selector: 'lib-icons',
  templateUrl: './icons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent]
})
export class Icon {

  tamanho = input<SizeProp>('sm');

  tipo = input<string>('');

  icon = computed<IconDefinition>(() => {

    switch (this.tipo()) {

      case 'adicionar':
        return faPlus;

      case 'seta-voltar':
        return faChevronLeft;

      case 'check':
        return faCheck;

      case 'sobre':
        return faInfoCircle;

      case 'senha':
        return faKey;

      case 'logout':
        return faSignOutAlt;

      case 'copyright':
        return faCopyright;

      case 'atualizar':
        return faSyncAlt;

      case 'manual':
        return faBook;

      case 'manifesto':
        return faBookmark;

      case 'user':
        return faUser;

      default:
        return faInfoCircle;
    }

  });

}