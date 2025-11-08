# Afripay Transaction Dashboard

A mini transaction dashboard built with Next.js that allows users to manage transactions, filter by type, view summary statistics, and export data.

## Features

- ✅ View a list of transactions with id, description, amount, type, and date
- ✅ Add new transactions via a modal form
- ✅ Filter transactions by type (All, Credit, Debit)
- ✅ Display summary statistics (Total Inflow, Total Outflow, Net Balance)
- ✅ Persist data in localStorage
- ✅ Export transactions to CSV or Excel (XLSX) format (respects current filters)
- ✅ Toast notifications for transaction additions
- ✅ Pagination with customizable items per page (5, 10, 20, 50)
- ✅ Responsive design for desktop and mobile devices
- ✅ Currency formatting with Naira symbol (₦)
- ✅ Initial dummy data for demonstration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Export Library**: xlsx (for Excel export)
- **Toast Notifications**: react-hot-toast
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Architecture**: SOLID principles with service interfaces

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Toaster
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── TransactionForm.tsx # Modal form for adding transactions
│   ├── TransactionList.tsx # Table component for displaying transactions
│   ├── FilterButtons.tsx   # Filter buttons component
│   ├── SummaryStats.tsx    # Summary statistics cards
│   └── Pagination.tsx      # Pagination component
├── interfaces/
│   ├── IStorageService.ts   # Storage service interface
│   └── IExportService.ts   # Export service interface
├── services/
│   ├── StorageService.ts   # LocalStorage service implementation
│   └── ExportService.ts    # Export service implementation
├── types/
│   └── transaction.ts      # TypeScript types for transactions
├── utils/
│   ├── currency.ts         # Currency formatter utility (Naira)
│   ├── dummyData.ts       # Initial dummy transaction data
│   ├── storage.ts          # Legacy storage utilities (deprecated)
│   └── export.ts           # Legacy export utilities (deprecated)
└── package.json
```

## Component Architecture

### Main Components

1. **TransactionForm** (`components/TransactionForm.tsx`)

   - Modal form component for adding new transactions
   - Handles form validation and submission

2. **TransactionList** (`components/TransactionList.tsx`)

   - Displays transactions in a responsive table
   - Shows all fields: ID, Description, Amount, Type, Date
   - Shows empty state when no transactions exist
   - Color-coded transaction types

3. **FilterButtons** (`components/FilterButtons.tsx`)

   - Filter controls for All, Credit, and Debit
   - Active state styling

4. **SummaryStats** (`components/SummaryStats.tsx`)

   - Calculates and displays summary statistics
   - Shows Total Inflow, Total Outflow, and Net Balance
   - Color-coded values (green for positive, red for negative)

5. **Pagination** (`components/Pagination.tsx`)
   - Handles pagination UI and navigation
   - Page number buttons with ellipsis for large page counts
   - Items per page selector (5, 10, 20, 50)
   - Shows "Showing X to Y of Z transactions"

### Services (SOLID Principles)

1. **StorageService** (`services/StorageService.ts`)

   - Implements `IStorageService` interface
   - Handles localStorage operations for transactions

2. **ExportService** (`services/ExportService.ts`)
   - Implements `IExportService` interface
   - Handles CSV and Excel export operations

### Utilities

1. **CurrencyFormatter** (`utils/currency.ts`)

   - Formats currency values with Naira symbol (₦)
   - Provides consistent currency formatting across the app

2. **Dummy Data** (`utils/dummyData.ts`)
   - Generates initial dummy transaction data
   - Used when localStorage is empty

## Design Decisions

### SOLID Principles

- **Single Responsibility Principle (SRP)**: Each component, service, and utility has a single, well-defined responsibility
- **Dependency Inversion Principle (DIP)**: Services implement interfaces, allowing for easy testing and future extensions
- **Open/Closed Principle (OCP)**: Services are open for extension (can add new implementations) but closed for modification

### State Management

- Used React Hooks (useState, useEffect, useMemo) for state management
- Centralized state in the main page component
- Used `useMemo` for filtered and paginated transactions to optimize performance
- Pagination state managed separately (currentPage, itemsPerPage)

### Data Persistence

- Implemented localStorage for data persistence via StorageService
- Data automatically saves on every transaction change
- Data loads on component mount
- Initial dummy data loads if storage is empty

### Component Reusability

- Created small, focused, reusable components
- Each component has a single responsibility
- Props are well-typed with TypeScript
- Components follow consistent patterns

### Styling

- Used Tailwind CSS for utility-first styling
- Responsive design with mobile-first approach
- Consistent color scheme (blue for primary actions, green for credits, red for debits)
- Currency displayed with Naira symbol (₦)

### User Experience

- Modal form for adding transactions (non-intrusive)
- Toast notifications for successful transaction additions
- Clear visual feedback for transaction types
- Empty states for better UX
- Pagination for better performance with large datasets
- Export functionality respects current filters
- Smooth scrolling on page changes

### Type Safety

- Full TypeScript implementation
- Defined types for all data structures
- Type-safe props for all components
- Interface-based service contracts

### ID Generation

- Sequential numeric IDs for transactions
- IDs are simple numbers (1, 2, 3, etc.)
- New transactions get the next sequential number based on existing transactions

## Responsive Design

The dashboard is fully responsive:

- **Desktop**: Full-width layout with side-by-side statistics
- **Mobile**: Stacked layout with optimized spacing
- **Table**: Horizontal scroll on smaller screens
- **Pagination**: Adapts to screen size with responsive controls

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

This project is part of the Afripay Frontend Engineer Assessment.

