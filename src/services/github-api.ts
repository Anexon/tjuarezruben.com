import { fromFetch } from "rxjs/fetch";
import { mergeMap, map } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { forkJoin, from } from "rxjs";

export const GithubApi = {
  getRepos: () => {
    return fromFetch("https://api.github.com/users/anexon/repos").pipe(
      mergeMap((res) => {
        return res.json();
      }),
      mergeMap((respos: any[]) => {
        let reposAbstract: Observable<any>[] = [];
        respos.forEach((repo) => {
          reposAbstract.push(
            fromFetch(
              `https://raw.githubusercontent.com/${repo.full_name}/master/abstract.json`
            ).pipe(
              map((singleRes) => {
                return { response: singleRes, updated_at: repo.updated_at };
              })
            )
          );
        });
        return forkJoin(reposAbstract);
      }),
      mergeMap((responses: any[]) => {
        let validResponseBodies: any[] = [];
        responses.forEach((response: any) => {
          if (response.response.status === 200)
            validResponseBodies.push(
              from(response.response.json()).pipe(
                map((abstract: any) => {
                  return { ...abstract, updated_at: response.updated_at };
                })
              )
            );
        });
        return forkJoin(validResponseBodies);
      })
    );
  },
};
