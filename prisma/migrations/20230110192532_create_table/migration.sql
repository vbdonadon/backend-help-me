-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "id_author" TEXT NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authors_username_key" ON "authors"("username");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_id_author_fkey" FOREIGN KEY ("id_author") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
