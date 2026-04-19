# QuickFix-Tech Security Specification

## Data Invariants
1. A repair order must have a non-empty `id`, `customerName`, and `email`.
2. Tracking IDs must be exactly 8 characters of uppercase alphanumeric characters.
3. Once a status is 'completed', it should not be reverted (terminal state).
4. Public list access is disabled to prevent database scraping.
5. Get access is allowed ONLY with a valid 8-character ID.

## The "Dirty Dozen" Payloads (Deny cases)
1. `id: "SHORT"` - Too short.
2. `id: "TOO_LONG_IDENTIFIER"` - Too long.
3. `status: "invalid_status"` - Not in enum.
4. `customerName: ""` - Empty name.
5. Missing `deviceType`.
6. Injecting `isAdmin: true` into the document.
7. Modifying `createdAt` after creation.
8. Status transition from `completed` to `pending`.
9. `email: "not-an-email"`.
10. `id` with special characters like `!!!@@@`.
11. Update attempt on a document without providing the correct `id` match.
12. Blanket list query attempt.

## Test Runner logic
- `create`: Must provide all required fields correctly.
- `get`: Allowed for any valid ID.
- `list`: DENIED globally.
- `update`: Restrict to specific status fields or admin oversight.
- `delete`: DENIED globally.
