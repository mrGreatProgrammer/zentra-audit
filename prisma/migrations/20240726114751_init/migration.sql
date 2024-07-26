-- CreateTable
CREATE TABLE "LeaveMessageUs" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeaveMessageUs_pkey" PRIMARY KEY ("id")
);
