# Portfolio System - DFD Mermaid Diagrams

## 0-Level DFD (Context Diagram)

```mermaid
graph TD
    %% External Entities
    V[Website Visitor]
    A[Admin/Owner]
    S[Social Media Platforms]
    L[Local Storage]

    %% Main System
    PS[Portfolio System<br/>React + Express + SQLite]

    %% Data Flows
    V -->|D1: Navigation Requests<br/>Form Data<br/>Theme Preferences| PS
    PS -->|D2: Portfolio Content<br/>Visual Feedback<br/>Animations| V

    A -->|D3: Content Updates<br/>System Queries| PS
    PS -->|D4: Contact Data<br/>System Status| A

    PS -->|D5: Profile Link Requests| S
    S -->|D6: Profile Information| PS

    PS -->|D7: User Preferences<br/>Settings| L
    L -->|D8: Stored Preferences<br/>Settings| PS

    %% Styling
    classDef external fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef system fill:#f3e5f5,stroke:#4a148c,stroke-width:3px

    class V,A,S,L external
    class PS system
```

## 1-Level DFD (System Overview)

```mermaid
graph TD
    %% External Entities
    V[Website Visitor]
    SM[Social Media Platforms]

    %% Processes
    P1[1.0<br/>Handle User<br/>Interface]
    P2[2.0<br/>Manage Theme<br/>System]
    P3[3.0<br/>Process Contact<br/>Forms]
    P4[4.0<br/>Manage Animation<br/>System]
    P5[5.0<br/>Handle<br/>Navigation]
    P6[6.0<br/>Manage Content<br/>Display]
    P7[7.0<br/>Database<br/>Management]
    P8[8.0<br/>Handle Social<br/>Integration]

    %% Data Stores
    D1[(D1: Theme<br/>Preferences)]
    D2[(D2: Contact<br/>Data Store)]
    D3[(D3: SQLite<br/>Database)]

    %% Main Data Flows
    V -->|User Interactions| P1
    P1 -->|UI Updates| V

    P1 -->|Theme Requests| P2
    P2 -->|Theme Updates| P1
    P2 <-->|Theme Data| D1

    P1 -->|Form Data| P3
    P3 -->|Success/Error Messages| P1
    P3 -->|Contact Data| D2
    D2 -->|Validation Results| P3

    P1 -->|Mouse Data| P4
    P4 -->|Animation Updates| P5

    P5 -->|Page Content| P6
    P6 -->|Rendered Content| V

    P3 -->|DB Operations| P7
    P7 <-->|Queries/Results| D3

    P6 -->|Social Links| P8
    P8 -->|External Links| SM

    %% Styling
    classDef external fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef process fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef datastore fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px

    class V,SM external
    class P1,P2,P3,P4,P5,P6,P7,P8 process
    class D1,D2,D3 datastore
```

## Detailed 1-Level DFD with All Data Flows

```mermaid
graph TD
    %% External Entity
    V[Website Visitor]
    SM[Social Media<br/>Platforms]

    %% Processes
    P1[1.0<br/>Handle User Interface]
    P2[2.0<br/>Manage Theme System]
    P3[3.0<br/>Process Contact Forms]
    P4[4.0<br/>Manage Animation System]
    P5[5.0<br/>Handle Navigation]
    P6[6.0<br/>Manage Content Display]
    P7[7.0<br/>Database Management]
    P8[8.0<br/>Handle Social Integration]

    %% Data Stores
    D1[(D1<br/>Theme<br/>Preferences)]
    D2[(D2<br/>Contact<br/>Data Store)]
    D3[(D3<br/>SQLite<br/>Database)]

    %% Data Flows with Labels
    V -->|D1: User Interactions| P1
    P1 -->|D2: UI Updates| V
    P1 -->|D4: Theme Requests| P2
    P2 -->|D3: Theme Data| D1
    D1 -->|D3: Theme Data| P2
    P1 -->|D5: Form Data| P3
    P3 -->|D9: Success/Error Messages| P1
    P3 -->|D6: Contact Data| D2
    D2 -->|D8: Validation Results| P3
    P1 -->|D10: Mouse Data| P4
    P4 -->|D12: Animation Updates| P5
    P5 -->|D14: Page Content| P6
    P6 -->|D16: Rendered Content| V
    P3 -->|D7: Stored Data| P7
    P7 -->|D11: DB Queries| D3
    D3 -->|D11: DB Results| P7
    P6 -->|D15: Content Data| P8
    P8 -->|D17: External Links| SM
    P4 -->|D13: Cursor/Particle Data| P6

    %% Styling
    classDef external fill:#e1f5fe,stroke:#01579b,stroke-width:2px,color:#000
    classDef process fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000
    classDef datastore fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px,color:#000

    class V,SM external
    class P1,P2,P3,P4,P5,P6,P7,P8 process
    class D1,D2,D3 datastore
```

## Process Interaction Flow

```mermaid
graph LR
    %% User Input Flow
    UI[User Input] --> P1[Handle UI]
    P1 --> P2[Theme System]
    P1 --> P3[Contact Forms]
    P1 --> P4[Animation System]
    P1 --> P5[Navigation]

    %% Processing Flow
    P2 --> LS[Local Storage]
    P3 --> DB[Database]
    P4 --> P6[Content Display]
    P5 --> P6
    P6 --> P8[Social Integration]

    %% Output Flow
    P6 --> OUT[User Output]
    P8 --> EXT[External Links]

    %% Styling
    classDef input fill:#ffebee,stroke:#c62828,stroke-width:2px
    classDef process fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    classDef storage fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    classDef output fill:#fff3e0,stroke:#ef6c00,stroke-width:2px

    class UI input
    class P1,P2,P3,P4,P5,P6,P8 process
    class LS,DB storage
    class OUT,EXT output
```

## System Architecture Overview

```mermaid
graph TB
    subgraph "Frontend (React)"
        UI[User Interface Layer]
        TC[Theme Context]
        GC[Galaxy Cursor]
        NAV[Navigation System]
    end

    subgraph "Backend (Express)"
        API[API Routes]
        VAL[Validation Layer]
        DB_CONN[Database Connection]
    end

    subgraph "Database (SQLite)"
        CONTACTS[Contacts Table]
        SCHEMA[Prisma Schema]
    end

    subgraph "External Services"
        GITHUB[GitHub Profile]
        LINKEDIN[LinkedIn Profile]
    end

    UI --> TC
    UI --> GC
    UI --> NAV
    UI --> API
    API --> VAL
    VAL --> DB_CONN
    DB_CONN --> CONTACTS
    DB_CONN --> SCHEMA
    UI --> GITHUB
    UI --> LINKEDIN

    %% Styling
    classDef frontend fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    classDef backend fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef database fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    classDef external fill:#fce4ec,stroke:#ad1457,stroke-width:2px

    class UI,TC,GC,NAV frontend
    class API,VAL,DB_CONN backend
    class CONTACTS,SCHEMA database
    class GITHUB,LINKEDIN external
```
