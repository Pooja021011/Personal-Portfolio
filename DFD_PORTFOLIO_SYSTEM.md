# Pooja Sharma Portfolio - Data Flow Diagrams (DFD)

**Project:** React Portfolio Website with Full-Stack Backend  
**Developer:** Pooja Sharma  
**Document Type:** System Analysis - Data Flow Diagrams  
**Date:** January 2025  
**Version:** 1.0

---

## Table of Contents

1. [DFD Overview](#dfd-overview)
2. [0-Level DFD (Context Diagram)](#0-level-dfd-context-diagram)
3. [1-Level DFD (System Overview)](#1-level-dfd-system-overview)
4. [Data Dictionary](#data-dictionary)
5. [Process Descriptions](#process-descriptions)

---

## DFD Overview

### System Description
The Portfolio System is a full-stack web application that allows visitors to view professional information, interact with various portfolio sections, and submit contact inquiries. The system manages user interactions, theme preferences, and contact data through a React frontend and Node.js backend.

### System Boundaries
- **Internal:** React Frontend, Express Backend, SQLite Database, Theme Management
- **External:** Website Visitors, Social Media Platforms, Email Systems, File System

### Key Data Flows
- User navigation and interaction data
- Theme preference data
- Contact form submissions
- Portfolio content display
- Social media integration
- Animation and cursor tracking data

---

## 0-Level DFD (Context Diagram)

```
                    ┌─────────────────────────────────────────────────────────┐
                    │                                                         │
                    │              PORTFOLIO SYSTEM                           │
                    │                                                         │
                    │  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐ │
                    │  │   React     │    │   Express    │    │   SQLite    │ │
                    │  │  Frontend   │◄──►│   Backend    │◄──►│  Database   │ │
                    │  │             │    │              │    │             │ │
                    │  └─────────────┘    └──────────────┘    └─────────────┘ │
                    │                                                         │
                    └─────────────────────────────────────────────────────────┘
                              ▲                                    ▲
                              │                                    │
                    ┌─────────┴─────────┐                ┌───────┴────────┐
                    │                   │                │                │
                    ▼                   ▼                ▼                ▼
            ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
            │              │    │              │    │              │    │              │
            │   WEBSITE    │    │    ADMIN     │    │   SOCIAL     │    │    LOCAL     │
            │   VISITOR    │    │   (OWNER)    │    │   MEDIA      │    │   STORAGE    │
            │              │    │              │    │  PLATFORMS   │    │              │
            └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

### External Entities:

1. **WEBSITE VISITOR**
   - Views portfolio content
   - Navigates between sections
   - Submits contact forms
   - Interacts with animations

2. **ADMIN (OWNER)**
   - Views contact submissions
   - Manages portfolio content
   - Monitors system performance

3. **SOCIAL MEDIA PLATFORMS**
   - GitHub profile integration
   - LinkedIn profile integration
   - External link navigation

4. **LOCAL STORAGE**
   - Theme preferences
   - User settings
   - Temporary data storage

### Data Flows (0-Level):

| Flow ID | From | To | Data |
|---------|------|----|----- |
| D1 | Website Visitor | Portfolio System | Navigation Requests, Form Data, Theme Preferences |
| D2 | Portfolio System | Website Visitor | Portfolio Content, Visual Feedback, Animations |
| D3 | Admin | Portfolio System | Content Updates, System Queries |
| D4 | Portfolio System | Admin | Contact Data, System Status |
| D5 | Portfolio System | Social Media Platforms | Profile Link Requests |
| D6 | Social Media Platforms | Portfolio System | Profile Information |
| D7 | Portfolio System | Local Storage | User Preferences, Settings |
| D8 | Local Storage | Portfolio System | Stored Preferences, Settings |

---

## 1-Level DFD (System Overview)

```
                                    WEBSITE VISITOR
                                          │
                                          │ Navigation Requests
                                          │ Form Submissions
                                          │ Theme Changes
                                          ▼
                    ┌─────────────────────────────────────────────────────────┐
                    │                                                         │
                    │                 PORTFOLIO SYSTEM                        │
                    │                                                         │
                    │  ┌─────────────┐         ┌─────────────┐                │
                    │  │             │         │             │                │
                    │  │ PROCESS 1   │◄───────►│ PROCESS 2   │                │
                    │  │ Handle User │         │ Manage      │                │
                    │  │ Interface   │         │ Theme       │                │
                    │  │             │         │ System      │                │
                    │  └─────────────┘         └─────────────┘                │
                    │         │                       │                       │
                    │         │                       │                       │
                    │         ▼                       ▼                       │
                    │  ┌─────────────┐         ┌─────────────┐                │
                    │  │             │         │             │                │
                    │  │ PROCESS 3   │◄───────►│ PROCESS 4   │                │
                    │  │ Process     │         │ Manage      │                │
                    │  │ Contact     │         │ Animation   │                │
                    │  │ Forms       │         │ System      │                │
                    │  └─────────────┘         └─────────────┘                │
                    │         │                       │                       │
                    │         │                       │                       │
                    │         ▼                       ▼                       │
                    │  ┌─────────────┐         ┌─────────────┐                │
                    │  │             │         │             │                │
                    │  │ PROCESS 5   │◄───────►│ PROCESS 6   │                │
                    │  │ Handle      │         │ Manage      │                │
                    │  │ Navigation  │         │ Content     │                │
                    │  │             │         │ Display     │                │
                    │  └─────────────┘         └─────────────┘                │
                    │                                                         │
                    └─────────────────────────────────────────────────────────┘
                                          │
                                          │ Contact Data
                                          │ User Preferences
                                          ▼
                                   ┌─────────────┐
                                   │             │
                                   │  DATABASE   │
                                   │  STORAGE    │
                                   │             │
                                   └─────────────┘
```

### Detailed 1-Level DFD with Data Stores:

```
WEBSITE VISITOR
      │
      │ D1: User Interactions
      ▼
┌─────────────┐    D2: UI Updates     ┌─────────────┐    D3: Theme Data    ┌─────────────┐
│             │◄──────────────────────│             │◄───────────────────►│             │
│ PROCESS 1   │                       │ PROCESS 2   │                     │     D1      │
│ Handle User │                       │ Manage      │                     │   Theme     │
│ Interface   │                       │ Theme       │                     │ Preferences │
│             │──────────────────────►│ System      │                     │             │
└─────────────┘    D4: Theme Requests └─────────────┘                     └─────────────┘
      │
      │ D5: Form Data
      ▼
┌─────────────┐    D6: Contact Data   ┌─────────────┐    D7: Stored Data  ┌─────────────┐
│             │──────────────────────►│             │◄───────────────────►│             │
│ PROCESS 3   │                       │     D2      │                     │ PROCESS 7   │
│ Process     │                       │  Contact    │                     │ Database    │
│ Contact     │◄──────────────────────│   Data      │                     │ Management  │
│ Forms       │    D8: Validation     │   Store     │                     │             │
└─────────────┘                       └─────────────┘                     └─────────────┘
      │                                                                           │
      │ D9: Success/Error Messages                                                │
      ▼                                                                           ▼
┌─────────────┐    D10: Mouse Data    ┌─────────────┐    D11: DB Queries  ┌─────────────┐
│             │◄──────────────────────│             │◄───────────────────►│             │
│ PROCESS 4   │                       │ PROCESS 5   │                     │     D3      │
│ Manage      │                       │ Handle      │                     │   SQLite    │
│ Animation   │──────────────────────►│ Navigation  │                     │  Database   │
│ System      │    D12: Animation     │             │                     │             │
└─────────────┘                       └─────────────┘                     └─────────────┘
      │                                     │
      │ D13: Cursor/Particle Data           │ D14: Page Content
      ▼                                     ▼
┌─────────────┐                       ┌─────────────┐
│             │                       │             │
│ PROCESS 6   │◄─────────────────────►│ PROCESS 8   │
│ Manage      │    D15: Content Data  │ Handle      │
│ Content     │                       │ Social      │
│ Display     │                       │ Integration │
│             │                       │             │
└─────────────┘                       └─────────────┘
      │                                     │
      │ D16: Rendered Content               │ D17: External Links
      ▼                                     ▼
WEBSITE VISITOR                       SOCIAL MEDIA PLATFORMS
```

### Process Descriptions (1-Level):

#### PROCESS 1: Handle User Interface
- **Input:** User clicks, form inputs, navigation requests
- **Process:** Manages all user interactions, validates inputs, handles events
- **Output:** UI updates, state changes, user feedback
- **Data Stores:** Theme Preferences (Read/Write)

#### PROCESS 2: Manage Theme System
- **Input:** Theme toggle requests, system initialization
- **Process:** Switches between light/dark modes, persists preferences
- **Output:** Theme updates, CSS class changes
- **Data Stores:** Theme Preferences (Read/Write), Local Storage

#### PROCESS 3: Process Contact Forms
- **Input:** Contact form submissions, validation requests
- **Process:** Validates form data, processes submissions, handles errors
- **Output:** Success/error messages, database updates
- **Data Stores:** Contact Data Store (Write), Database (Write)

#### PROCESS 4: Manage Animation System
- **Input:** Mouse movements, user interactions, theme changes
- **Process:** Generates galaxy cursor effects, particle animations, transitions
- **Output:** Animation updates, visual effects
- **Data Stores:** None (Real-time processing)

#### PROCESS 5: Handle Navigation
- **Input:** Navigation requests, page changes, routing
- **Process:** Manages page transitions, updates active states, handles routing
- **Output:** Page content, navigation updates
- **Data Stores:** None (State-based)

#### PROCESS 6: Manage Content Display
- **Input:** Page requests, content queries, display preferences
- **Process:** Renders portfolio content, manages responsive layouts
- **Output:** Formatted content, responsive displays
- **Data Stores:** None (Static content)

#### PROCESS 7: Database Management
- **Input:** Contact form data, query requests
- **Process:** Handles database operations, data persistence, queries
- **Output:** Stored data, query results
- **Data Stores:** SQLite Database (Read/Write)

#### PROCESS 8: Handle Social Integration
- **Input:** Social media link clicks, profile requests
- **Process:** Manages external links, social media integration
- **Output:** External navigation, profile access
- **Data Stores:** None (External links)

---

## Data Dictionary

### Data Stores:

#### D1: Theme Preferences
- **Description:** Stores user theme preferences (light/dark mode)
- **Data Elements:**
  - `darkMode`: Boolean (true/false)
  - `timestamp`: Date/Time of last change
- **Access:** Read/Write by Theme Management Process
- **Storage:** Browser localStorage

#### D2: Contact Data Store
- **Description:** Temporary storage for contact form processing
- **Data Elements:**
  - `name`: String (1-100 characters)
  - `email`: String (valid email format)
  - `message`: String (1-1000 characters)
  - `timestamp`: Date/Time of submission
- **Access:** Write by Contact Process, Read by Database Process
- **Storage:** Memory (temporary)

#### D3: SQLite Database
- **Description:** Persistent storage for contact submissions
- **Data Elements:**
  - `id`: Integer (Primary Key, Auto-increment)
  - `name`: String (Contact name)
  - `email`: String (Contact email)
  - `message`: Text (Contact message)
  - `createdAt`: DateTime (Submission timestamp)
  - `updatedAt`: DateTime (Last update timestamp)
- **Access:** Read/Write by Database Management Process
- **Storage:** SQLite file system

### Data Flows:

#### D1: User Interactions
- **Description:** All user input events and interactions
- **Data Elements:**
  - Mouse clicks and movements
  - Form input data
  - Navigation requests
  - Theme toggle requests
- **Source:** Website Visitor
- **Destination:** Handle User Interface Process

#### D2: UI Updates
- **Description:** Visual updates and feedback to user
- **Data Elements:**
  - Page content changes
  - Animation updates
  - Form validation messages
  - Theme changes
- **Source:** Various Processes
- **Destination:** Website Visitor

#### D3: Theme Data
- **Description:** Theme preference information
- **Data Elements:**
  - `darkMode`: Boolean value
  - Theme-specific styling data
- **Source/Destination:** Theme Management Process ↔ Theme Preferences Store

#### D4: Theme Requests
- **Description:** Requests to change theme settings
- **Data Elements:**
  - Toggle requests
  - Theme initialization data
- **Source:** Handle User Interface Process
- **Destination:** Manage Theme System Process

#### D5: Form Data
- **Description:** Contact form submission data
- **Data Elements:**
  - Name, email, message fields
  - Validation status
  - Submission timestamp
- **Source:** Handle User Interface Process
- **Destination:** Process Contact Forms

#### D6: Contact Data
- **Description:** Processed contact information
- **Data Elements:**
  - Validated form data
  - Processing status
  - Error information (if any)
- **Source:** Process Contact Forms
- **Destination:** Contact Data Store

#### D7: Stored Data
- **Description:** Persistent contact information
- **Data Elements:**
  - Complete contact records
  - Database metadata
- **Source/Destination:** Database Management Process ↔ SQLite Database

#### D8: Validation Results
- **Description:** Form validation outcomes
- **Data Elements:**
  - Validation status (pass/fail)
  - Error messages
  - Field-specific validation results
- **Source:** Contact Data Store
- **Destination:** Process Contact Forms

#### D9: Success/Error Messages
- **Description:** User feedback messages
- **Data Elements:**
  - Message text
  - Message type (success/error/warning)
  - Display duration
- **Source:** Process Contact Forms
- **Destination:** Handle User Interface Process

#### D10: Mouse Data
- **Description:** Real-time mouse tracking information
- **Data Elements:**
  - X, Y coordinates
  - Movement velocity
  - Click events
- **Source:** Handle User Interface Process
- **Destination:** Manage Animation System Process

#### D11: DB Queries
- **Description:** Database operation requests
- **Data Elements:**
  - Query type (INSERT, SELECT, UPDATE, DELETE)
  - Query parameters
  - Connection information
- **Source/Destination:** Database Management Process ↔ SQLite Database

#### D12: Animation Updates
- **Description:** Animation state and rendering data
- **Data Elements:**
  - Particle positions
  - Animation states
  - Cursor effects data
- **Source:** Manage Animation System Process
- **Destination:** Handle Navigation Process

#### D13: Cursor/Particle Data
- **Description:** Galaxy cursor and particle system data
- **Data Elements:**
  - Cursor position and effects
  - Particle positions and properties
  - Animation timing data
- **Source:** Manage Animation System Process
- **Destination:** Manage Content Display Process

#### D14: Page Content
- **Description:** Portfolio page content and structure
- **Data Elements:**
  - Page components
  - Content data
  - Layout information
- **Source:** Handle Navigation Process
- **Destination:** Manage Content Display Process

#### D15: Content Data
- **Description:** Formatted content for display
- **Data Elements:**
  - Rendered components
  - Styling information
  - Responsive layout data
- **Source/Destination:** Manage Content Display Process ↔ Handle Social Integration Process

#### D16: Rendered Content
- **Description:** Final rendered portfolio content
- **Data Elements:**
  - Complete page markup
  - Styling and animations
  - Interactive elements
- **Source:** Manage Content Display Process
- **Destination:** Website Visitor

#### D17: External Links
- **Description:** Social media and external navigation data
- **Data Elements:**
  - GitHub profile URL
  - LinkedIn profile URL
  - Link metadata
- **Source:** Handle Social Integration Process
- **Destination:** Social Media Platforms

---

## Process Descriptions

### Level 0 Process: Portfolio System
**Purpose:** Complete portfolio management system handling user interactions, content display, and data management.

**Inputs:**
- User navigation and interaction requests
- Contact form submissions
- Theme preference changes
- Social media access requests

**Processing:**
- Manages user interface and interactions
- Processes and stores contact form data
- Handles theme switching and persistence
- Manages animations and visual effects
- Provides portfolio content display
- Integrates with social media platforms

**Outputs:**
- Portfolio content and navigation
- Contact form processing results
- Theme updates and visual changes
- Animation and interactive effects
- Social media profile access

**Data Stores:**
- Theme preferences in localStorage
- Contact data in SQLite database
- Temporary processing data in memory

### Level 1 Processes:

#### Process 1: Handle User Interface
**Purpose:** Manage all user interactions and interface updates.
**Trigger:** User input events (clicks, form submissions, navigation)
**Processing Logic:**
1. Capture user input events
2. Validate input data
3. Route requests to appropriate processes
4. Update user interface elements
5. Provide user feedback

#### Process 2: Manage Theme System
**Purpose:** Handle light/dark mode theme switching and persistence.
**Trigger:** Theme toggle requests or system initialization
**Processing Logic:**
1. Receive theme change requests
2. Update application theme state
3. Apply CSS class changes
4. Persist preferences to localStorage
5. Notify other processes of theme changes

#### Process 3: Process Contact Forms
**Purpose:** Handle contact form submissions and validation.
**Trigger:** Contact form submission
**Processing Logic:**
1. Receive form data
2. Validate input fields
3. Process valid submissions
4. Store data in database
5. Return success/error messages

#### Process 4: Manage Animation System
**Purpose:** Handle galaxy cursor and particle animations.
**Trigger:** Mouse movements and user interactions
**Processing Logic:**
1. Track mouse position and movement
2. Generate particle effects
3. Update cursor animations
4. Manage animation lifecycle
5. Optimize performance

#### Process 5: Handle Navigation
**Purpose:** Manage page navigation and routing.
**Trigger:** Navigation requests and page changes
**Processing Logic:**
1. Process navigation requests
2. Update active page state
3. Handle page transitions
4. Manage browser history
5. Update navigation indicators

#### Process 6: Manage Content Display
**Purpose:** Render and display portfolio content.
**Trigger:** Page load and content requests
**Processing Logic:**
1. Retrieve content data
2. Apply responsive layouts
3. Render components
4. Handle theme-specific styling
5. Optimize for different devices

#### Process 7: Database Management
**Purpose:** Handle all database operations and data persistence.
**Trigger:** Data storage and retrieval requests
**Processing Logic:**
1. Receive database operation requests
2. Execute SQL queries
3. Handle database connections
4. Manage data integrity
5. Return query results

#### Process 8: Handle Social Integration
**Purpose:** Manage social media links and external integrations.
**Trigger:** Social media link clicks
**Processing Logic:**
1. Process social media requests
2. Validate external URLs
3. Handle link navigation
4. Manage security attributes
5. Track external interactions

---

**Document Information:**
- **Created:** January 2025
- **Version:** 1.0
- **Status:** Complete
- **Review Date:** March 2025
- **Approved By:** Technical Analysis Team

**Notes:**
- DFDs follow Yourdon-DeMarco notation standards
- All processes are numbered for easy reference
- Data flows are bidirectional where appropriate
- External entities represent system boundaries
- Data stores include both persistent and temporary storage