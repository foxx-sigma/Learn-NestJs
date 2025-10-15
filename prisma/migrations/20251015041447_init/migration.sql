-- CreateTable
CREATE TABLE `Menu` (
    `id_menu` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_menu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaksi` (
    `id_transaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `id_menu` INTEGER NOT NULL,
    `payment` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `total_harga` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_transaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail_Transaksi` (
    `id_detail` INTEGER NOT NULL AUTO_INCREMENT,
    `quentity` INTEGER NOT NULL,
    `subtotal` INTEGER NOT NULL,
    `menuid_menu` INTEGER NULL,
    `Transaksiid_transaksi` INTEGER NULL,

    PRIMARY KEY (`id_detail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaksi` ADD CONSTRAINT `Transaksi_id_menu_fkey` FOREIGN KEY (`id_menu`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_Transaksi` ADD CONSTRAINT `detail_Transaksi_menuid_menu_fkey` FOREIGN KEY (`menuid_menu`) REFERENCES `Menu`(`id_menu`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_Transaksi` ADD CONSTRAINT `detail_Transaksi_Transaksiid_transaksi_fkey` FOREIGN KEY (`Transaksiid_transaksi`) REFERENCES `Transaksi`(`id_transaksi`) ON DELETE SET NULL ON UPDATE CASCADE;
