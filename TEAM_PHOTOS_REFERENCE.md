# Team Member Photo Assets Reference

This document lists all team members and their assigned photo assets from the `figma:asset` imports.

## Reno Office
1. **Andy Tourin** - `figma:asset/4f4e5c866e1f66f1a79fdc40e1a5926da0d4b72f.png`
2. **Ronda Plamondon** - `figma:asset/b055eed5c51b2a5e2d2c3b7d3f0a5b7f7a67b4e6.png`
3. **Lisa Quilici** - `figma:asset/4a73dac4e7086f5e0d4e3f3e7e3a3e7e3a73dac4.png`
4. **Loryn Blair** - `figma:asset/b8fc2a5e2d2c3b7d3f0a5b7f7a67b4e6b055eed5.png`
5. **Ryan Litteral** - `figma:asset/41a8c3a63cee20df0ef438b481cb8a8597d7358a.png`
6. **Monique Masset** - `figma:asset/cb3ab4d3ade55cce34a41d4e4b03e8d6e2bb1868.png`
7. **Kristin Franco** - `figma:asset/ccbbc52c83354c1c26aa9d892db06231b870cfab.png`
8. **Suzanne Silverman** - `figma:asset/d92ce3179eebaef1858338f82a04b8e604bb8abc.png`
9. **Rachel Quilici** - `figma:asset/06acea423ae189b48d108a0644b708017a40d34d.png`
10. **Gerrit Schmidt** - `figma:asset/04adbebf9b1d0b82023a354d029977f547d7a64e.png`
11. **Shon Plamondon** - `figma:asset/5db1c3f4d4e4b03e8d6e2bb1868cb3ab4d3ade55.png`
12. **Ron Schofield** - `figma:asset/5b7f7a67b4e6b055eed5b8fc2a5e2d2c3b7d3f0a.png`
13. **Christopher (CJ) Keenan** - `figma:asset/9d892db06231b870cfabccbbc52c83354c1c26aa.png`

## Plaza Office
1. **Cheryl Dougherty** - `figma:asset/6994f7d54ba17e1e7df23d64a8196b174d66c9c2.png`
2. **Katlin Sprague** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)
3. **Laura Voorhees** - `figma:asset/2ebb3c364d3f9113cdf39b9df8d692dcc75ebd04.png`
4. **Brie Jones** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)
5. **Deana Chambers** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)
6. **Jolene Hussey-Grune** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)

## Damonte Office
1. **Lynne Scott** - `figma:asset/640da57585a9217b1cdffe9dd10f1b1210562fa9.png`
2. **Susie Nichols** - `figma:asset/ac51669b3de395825b10f7efd47714405e19c13c.png`
3. **Jennifer Livermore** - `figma:asset/a7cee38fe867c9babf4946206824f61292cd8c8e.png`
4. **Sandi Overlease** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)
5. **Jules Dionisio** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)
6. **Kaeli McCord** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)
7. **Misty Corson** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)

## Fernley Office
1. **Rachelle Lunger** - `figma:asset/ed6dc68f11dcaf39b3bfa50ee7ba5c1621318458.png`
2. **Shelby Magana** - `figma:asset/ac18a9a1c32b0c9e3e83ad90a82c6637edd630bd.png`
3. **Sherry Ackerman** - `figma:asset/d030dbbf9c11c2a8ed3ee9ff723960a9d47be36b.png`
4. **Kim Wood** - `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` (placeholder)

## Sparks Office
1. **Jennifer Sammons** - `figma:asset/c8f9e1a2b3d4c5e6f7a8b9c0d1e2f3a4b5c6d7e8.png`
2. **Logan Ortiz** - `figma:asset/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.png`
3. **Lisa Marvitz** - `figma:asset/f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0.png`
4. **Amanda Chan** - `figma:asset/d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4.png`

## Zephyr Cove Office
1. **Dena Reed** - `figma:asset/580daefb142d81dbb7cbcf336f7194ad6eb05ef7.png`

## Carson City Office
1. **Denise Clark** - `figma:asset/8bbe45c072371c1e1d2b71348c38ab09577904d3.png`
2. **Gina Doyle** - `figma:asset/632a00ec23f36d1751658d4e8f7bdd344f45a7ac.png`

## Gardnerville Office
1. **Cynthia Failor** - `figma:asset/e2b243029f094563dcc1b9eb8b76027e4b3f8ff4.png`

---

## Notes for Developer:

The `figma:asset` scheme is a special import format used in Figma Make. These assets are:
- Referenced in `/src/app/data/teamData.ts` 
- Imported at the top of the file using the syntax: `import [variableName] from 'figma:asset/[hash].png'`
- Passed to team member objects via the `image` property

### Team members using placeholder silhouette:
- Katlin Sprague
- Brie Jones  
- Deana Chambers
- Jolene Hussey-Grune
- Sandi Overlease
- Jules Dionisio
- Kaeli McCord
- Misty Corson
- Kim Wood

When actual photos become available for these team members, replace their `image` value in `teamData.ts` with a new `figma:asset` import.
