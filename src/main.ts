import { Observable, of, Subject } from 'rxjs'
import { map, take, tap } from 'rxjs/operators'

of(1, 2, 3)
        .pipe(
                map((data) => data * 2),
                tap((data) => console.log(data)),
                take(1)
        )
        .subscribe((s) => console.log(s))
