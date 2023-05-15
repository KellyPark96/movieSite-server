# NextJS Introduction

Learning NextJS by building a tiny movie website.

### .env file setup

```
    API_KEY=10923b261ba94d897ac6b81148314a3f
```

## 프로젝트 실행

```
  $ npm install
  $ npm run dev
```

## 기능 구현

### API 호출

- fetch를 사용하여 필요한 영화정보를 호출

### Loading

- 페이지의 전환 시 data가 불러져오는 시간동안 Loading 페이지를 보여줌.

### useParams

- 각 영화별 url의 id를 표현하기위해 react-router-dom의 useParams을 사용하여 id를 구현

### PropTypes

- 데이터의 type을 검증하기 위해서 PropTypes를 사용하였습니다.
