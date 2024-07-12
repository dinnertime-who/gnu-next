# Gnu Next

nextjs 기반의 CMS 프로젝트

## 구성

### [패키지 매니저 : pnpm](https://pnpm.io/ko/)

### [Component Library : shadcn/ui](https://ui.shadcn.com/)

### [사용자 인증 도구: Auth.js](https://authjs.dev/)

아래 명령어로 토큰 관리 secret을 자동생성하여 env로 관리하세요.

```
pnpx auth secret
```

### [Database : Turso](https://docs.turso.tech/introduction)

Turso cli 설치하기

```
# macOS
brew install tursodatabase/tap/turso

# Linux
curl -sSfL https://get.tur.so/install.sh | bash

# Windows ( WSL 설치가 필수입니다. )
wsl

curl -sSfL https://get.tur.so/install.sh | bash
```

### [Prisma](https://www.prisma.io/)

```
Prisma + Turso 사용하기 : https://docs.turso.tech/sdk/ts/orm/prisma
```

### [파일 관리 서비스 : Cloudflare R2](https://www.cloudflare.com/ko-kr/developer-platform/r2/)
