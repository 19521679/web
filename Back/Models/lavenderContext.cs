using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Back.Models
{
    public partial class lavenderContext : DbContext
    {
        public lavenderContext()
        {
        }

        public lavenderContext(DbContextOptions<lavenderContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Baohanh> Baohanhs { get; set; }
        public virtual DbSet<Chitietgiohang> Chitietgiohang { get; set; }
        public virtual DbSet<Chitiethoadon> Chitiethoadon { get; set; }
        public virtual DbSet<Chitietsanpham> Chitietsanpham { get; set; }
        public virtual DbSet<Chitietvanchuyen> Chitietvanchuyen { get; set; }
        public virtual DbSet<Danhgia> Danhgia { get; set; }
        public virtual DbSet<Giohang> Giohang { get; set; }
        public virtual DbSet<Hoadon> Hoadon { get; set; }
        public virtual DbSet<Khachhang> Khachhang { get; set; }
        public virtual DbSet<Khuyenmai> Khuyenmai { get; set; }
        public virtual DbSet<Loaisanpham> Loaisanpham { get; set; }
        public virtual DbSet<Nhacungcap> Nhacungcap { get; set; }
        public virtual DbSet<Nhanvien> Nhanvien { get; set; }
        public virtual DbSet<Phieunhapsanpham> Phieunhapsanpham { get; set; }
        public virtual DbSet<Sanpham> Sanpham { get; set; }
        public virtual DbSet<Taikhoankhachhang> Taikhoankhachhang { get; set; }
        public virtual DbSet<Taikhoannhanvien> Taikhoannhanvien { get; set; }
        public virtual DbSet<Thuonghieu> Thuonghieu { get; set; }
        public virtual DbSet<Vanchuyen> Vanchuyen { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Baohanh>(entity =>
            {
                entity.HasKey(e => e.Mabaohanh)
                    .IsClustered(false);

                entity.ToTable("BAOHANH");

                entity.Property(e => e.Mabaohanh).HasColumnName("MABAOHANH");

                entity.Property(e => e.Chiphi).HasColumnName("CHIPHI");

                entity.Property(e => e.Ghichu)
                    .HasColumnType("text")
                    .HasColumnName("GHICHU");

                entity.Property(e => e.Imei)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("IMEI");

                entity.Property(e => e.Ngaybaohanh)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYBAOHANH");

                entity.HasOne(d => d.ImeiNavigation)
                    .WithMany(p => p.Baohanhs)
                    .HasForeignKey(d => d.Imei)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BAOHANH_REFERENCE_CHITIETS");
            });

            modelBuilder.Entity<Chitietgiohang>(entity =>
            {
                entity.HasKey(e => new { e.Magiohang, e.Masanpham })
                    .IsClustered(false);

                entity.ToTable("CHITIETGIOHANG");

                entity.Property(e => e.Magiohang)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("MAGIOHANG");

                entity.Property(e => e.Masanpham).HasColumnName("MASANPHAM");

                entity.Property(e => e.Soluong).HasColumnName("SOLUONG");

                entity.HasOne(d => d.MagiohangNavigation)
                    .WithMany(p => p.Chitietgiohangs)
                    .HasForeignKey(d => d.Magiohang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHITIETG_REFERENCE_GIOHANG");

                entity.HasOne(d => d.MasanphamNavigation)
                    .WithMany(p => p.Chitietgiohangs)
                    .HasForeignKey(d => d.Masanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHITIETG_REFERENCE_SANPHAM");
            });

            modelBuilder.Entity<Chitiethoadon>(entity =>
            {
                entity.HasKey(e => new { e.Sohoadon, e.Imei })
                    .IsClustered(false);

                entity.ToTable("CHITIETHOADON");

                entity.Property(e => e.Sohoadon).HasColumnName("SOHOADON");

                entity.Property(e => e.Imei)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("IMEI");


                entity.Property(e => e.Tien).HasColumnName("TIEN");

                entity.HasOne(d => d.ImeiNavigation)
                    .WithMany(p => p.Chitiethoadons)
                    .HasForeignKey(d => d.Imei)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHITIETH_REFERENCE_CHITIETS");

                entity.HasOne(d => d.SohoadonNavigation)
                    .WithMany(p => p.Chitiethoadons)
                    .HasForeignKey(d => d.Sohoadon)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHITIETH_REFERENCE_HOADON");
            });

            modelBuilder.Entity<Chitietsanpham>(entity =>
            {
                entity.HasKey(e => e.Imei)
                    .IsClustered(false);

                entity.ToTable("CHITIETSANPHAM");

                entity.Property(e => e.Imei)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("IMEI");

                entity.Property(e => e.Masanpham).HasColumnName("MASANPHAM");

                entity.Property(e => e.Ngaysanxuat)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYSANXUAT");

                entity.Property(e => e.Tinhtrang)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("TINHTRANG");

                entity.HasOne(d => d.MasanphamNavigation)
                    .WithMany(p => p.Chitietsanphams)
                    .HasForeignKey(d => d.Masanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHITIETS_REFERENCE_SANPHAM");
            });

            modelBuilder.Entity<Chitietvanchuyen>(entity =>
            {
                entity.HasKey(e => new { e.Machitietvanchuyen, e.Mavanchuyen })
                    .IsClustered(false);

                entity.ToTable("CHITIETVANCHUYEN");

                entity.Property(e => e.Machitietvanchuyen)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("MACHITIETVANCHUYEN");

                entity.Property(e => e.Mavanchuyen).HasColumnName("MAVANCHUYEN");

                entity.Property(e => e.Thoidiem)
                    .HasColumnType("datetime")
                    .HasColumnName("THOIDIEM");

                entity.Property(e => e.Trangthai)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("TRANGTHAI");

                entity.HasOne(d => d.MavanchuyenNavigation)
                    .WithMany(p => p.Chitietvanchuyens)
                    .HasForeignKey(d => d.Mavanchuyen)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CHITIETV_REFERENCE_VANCHUYE");
            });

            modelBuilder.Entity<Danhgia>(entity =>
            {
                entity.HasKey(e => e.Madanhgia)
                    .IsClustered(false);

                entity.ToTable("DANHGIA");

                entity.Property(e => e.Madanhgia).HasColumnName("MADANHGIA");

                entity.Property(e => e.Image)
                    .HasColumnType("text")
                    .HasColumnName("IMAGE");

                entity.Property(e => e.Makhachhang).HasColumnName("MAKHACHHANG");

                entity.Property(e => e.Masanpham).HasColumnName("MASANPHAM");

                entity.Property(e => e.Noidung)
                    .HasColumnType("text")
                    .HasColumnName("NOIDUNG");

                entity.Property(e => e.Sosao).HasColumnName("SOSAO");

                entity.Property(e => e.Thoigian)
                    .HasColumnType("datetime")
                    .HasColumnName("THOIGIAN");

                entity.HasOne(d => d.MakhachhangNavigation)
                    .WithMany(p => p.Danhgia)
                    .HasForeignKey(d => d.Makhachhang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DANHGIA_REFERENCE_KHACHHAN");

                entity.HasOne(d => d.MasanphamNavigation)
                    .WithMany(p => p.Danhgia)
                    .HasForeignKey(d => d.Masanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DANHGIA_REFERENCE_SANPHAM");
            });

            modelBuilder.Entity<Giohang>(entity =>
            {
                entity.HasKey(e => e.Magiohang)
                    .IsClustered(false);

                entity.ToTable("GIOHANG");

                entity.Property(e => e.Magiohang).HasColumnName("MAGIOHANG");

                entity.Property(e => e.Makhachhang).HasColumnName("MAKHACHHANG");

                entity.Property(e => e.Tongtien).HasColumnName("TONGTIEN");

                entity.HasOne(d => d.MakhachhangNavigation)
                    .WithMany(p => p.Giohangs)
                    .HasForeignKey(d => d.Makhachhang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_GIOHANG_REFERENCE_KHACHHAN");
            });

            modelBuilder.Entity<Hoadon>(entity =>
            {
                entity.HasKey(e => e.Sohoadon)
                    .IsClustered(false);

                entity.ToTable("HOADON");

                entity.Property(e => e.Sohoadon).HasColumnName("SOHOADON");

                entity.Property(e => e.Makhachhang).HasColumnName("MAKHACHHANG");

                entity.Property(e => e.Makhuyenmai).HasColumnName("MAKHUYENMAI");

                entity.Property(e => e.Manhanvien).HasColumnName("MANHANVIEN");

                entity.Property(e => e.Ngayhoadon)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYHOADON");

                entity.Property(e => e.Tongtien).HasColumnName("TONGTIEN");

                entity.HasOne(d => d.MakhachhangNavigation)
                    .WithMany(p => p.Hoadons)
                    .HasForeignKey(d => d.Makhachhang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HOADON_REFERENCE_KHACHHAN");

                entity.HasOne(d => d.MakhuyenmaiNavigation)
                    .WithMany(p => p.Hoadons)
                    .HasForeignKey(d => d.Makhuyenmai)
                    .HasConstraintName("FK_HOADON_REFERENCE_KHUYENMA");

                entity.HasOne(d => d.ManhanvienNavigation)
                    .WithMany(p => p.Hoadons)
                    .HasForeignKey(d => d.Manhanvien)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HOADON_REFERENCE_NHANVIEN");
            });

            modelBuilder.Entity<Khachhang>(entity =>
            {
                entity.HasKey(e => e.Makhachhang)
                    .IsClustered(false);

                entity.ToTable("KHACHHANG");

                entity.Property(e => e.Makhachhang).HasColumnName("MAKHACHHANG");

                entity.Property(e => e.Diachi)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("DIACHI");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Loaikhachhang)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("LOAIKHACHHANG");

                entity.Property(e => e.Ngaysinh)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYSINH");

                entity.Property(e => e.Sodienthoai)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SODIENTHOAI");

                entity.Property(e => e.Tenkhachhang)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("TENKHACHHANG");
            });

            modelBuilder.Entity<Khuyenmai>(entity =>
            {
                entity.HasKey(e => e.Makhuyenmai)
                    .IsClustered(false);

                entity.ToTable("KHUYENMAI");

                entity.Property(e => e.Makhuyenmai).HasColumnName("MAKHUYENMAI");

                entity.Property(e => e.Dieukien)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("DIEUKIEN");

                entity.Property(e => e.Ngaybatdau)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYBATDAU");

                entity.Property(e => e.Ngayketthuc)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYKETTHUC");

                entity.Property(e => e.Tenkhuyenmai)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("TENKHUYENMAI");

                entity.Property(e => e.Tilekhuyenmai).HasColumnName("TILEKHUYENMAI");
            });

            modelBuilder.Entity<Loaisanpham>(entity =>
            {
                entity.HasKey(e => e.Maloai)
                    .IsClustered(false);

                entity.ToTable("LOAISANPHAM");

                entity.Property(e => e.Maloai).HasColumnName("MALOAI");

                entity.Property(e => e.Tenloai)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("TENLOAI");
            });

            modelBuilder.Entity<Nhacungcap>(entity =>
            {
                entity.HasKey(e => e.Manhacungcap)
                    .IsClustered(false);

                entity.ToTable("NHACUNGCAP");

                entity.Property(e => e.Manhacungcap).HasColumnName("MANHACUNGCAP");

                entity.Property(e => e.Diachi)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("DIACHI");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Sodienthoai)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SODIENTHOAI");

                entity.Property(e => e.Tennhacungcap)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("TENNHACUNGCAP");
            });

            modelBuilder.Entity<Nhanvien>(entity =>
            {
                entity.HasKey(e => e.Manhanvien)
                    .IsClustered(false);

                entity.ToTable("NHANVIEN");

                entity.Property(e => e.Manhanvien).HasColumnName("MANHANVIEN");

                entity.Property(e => e.Cccd)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CCCD");

                entity.Property(e => e.Chucvu)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CHUCVU");

                entity.Property(e => e.Diachi)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("DIACHI");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Ngaysinh)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYSINH");

                entity.Property(e => e.Ngayvaolam)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYVAOLAM");

                entity.Property(e => e.Sodienthoai)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SODIENTHOAI");

                entity.Property(e => e.Tennhanvien)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("TENNHANVIEN");
            });

            modelBuilder.Entity<Phieunhapsanpham>(entity =>
            {
                entity.HasKey(e => e.Maphieunhap)
                    .IsClustered(false);

                entity.ToTable("PHIEUNHAPSANPHAM");

                entity.Property(e => e.Maphieunhap).HasColumnName("MAPHIEUNHAP");

                entity.Property(e => e.Ghichu)
                    .HasColumnType("text")
                    .HasColumnName("GHICHU");

                entity.Property(e => e.Manhacungcap).HasColumnName("MANHACUNGCAP");

                entity.Property(e => e.Masanpham).HasColumnName("MASANPHAM");

                entity.Property(e => e.Ngaynhap)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYNHAP");

                entity.Property(e => e.Soluongnhap).HasColumnName("SOLUONGNHAP");

                entity.Property(e => e.Tiennhap).HasColumnName("TIENNHAP");

                entity.HasOne(d => d.ManhacungcapNavigation)
                    .WithMany(p => p.Phieunhapsanphams)
                    .HasForeignKey(d => d.Manhacungcap)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PHIEUNHA_REFERENCE_NHACUNGC");

                entity.HasOne(d => d.MasanphamNavigation)
                    .WithMany(p => p.Phieunhapsanphams)
                    .HasForeignKey(d => d.Masanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PHIEUNHA_REFERENCE_SANPHAM");
            });

            modelBuilder.Entity<Sanpham>(entity =>
            {
                entity.HasKey(e => e.Masanpham)
                    .IsClustered(false);

                entity.ToTable("SANPHAM");

                entity.Property(e => e.Masanpham).HasColumnName("MASANPHAM");

                entity.Property(e => e.Dongia).HasColumnName("DONGIA");

                entity.Property(e => e.Image)
                    .HasColumnType("text")
                    .HasColumnName("IMAGE");

                entity.Property(e => e.Maloai).HasColumnName("MALOAI");

                entity.Property(e => e.Mathuonghieu).HasColumnName("MATHUONGHIEU");

                entity.Property(e => e.Mota)
                    .HasColumnType("text")
                    .HasColumnName("MOTA");

                entity.Property(e => e.Soluongton).HasColumnName("SOLUONGTON");

                entity.Property(e => e.Tensanpham)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("TENSANPHAM");

                entity.Property(e => e.Thoidiemramat)
                    .HasColumnType("datetime")
                    .HasColumnName("THOIDIEMRAMAT");

                entity.HasOne(d => d.MaloaiNavigation)
                    .WithMany(p => p.Sanphams)
                    .HasForeignKey(d => d.Maloai)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SANPHAM_REFERENCE_LOAISANP");

                entity.HasOne(d => d.MathuonghieuNavigation)
                    .WithMany(p => p.Sanphams)
                    .HasForeignKey(d => d.Mathuonghieu)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SANPHAM_REFERENCE_THUONGHI");
            });

            modelBuilder.Entity<Taikhoankhachhang>(entity =>
            {
                entity.HasKey(e => e.Username)
                    .IsClustered(false);

                entity.ToTable("TAIKHOANKHACHHANG");

                entity.Property(e => e.Username)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("USERNAME");

                entity.Property(e => e.Makhachhang).HasColumnName("MAKHACHHANG");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.HasOne(d => d.MakhachhangNavigation)
                    .WithMany(p => p.Taikhoankhachhangs)
                    .HasForeignKey(d => d.Makhachhang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TAIKHOAN_REFERENCE_KHACHHAN");
            });

            modelBuilder.Entity<Taikhoannhanvien>(entity =>
            {
                entity.HasKey(e => e.Username)
                    .IsClustered(false);

                entity.ToTable("TAIKHOANNHANVIEN");

                entity.Property(e => e.Username)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("USERNAME");

                entity.Property(e => e.Manhanvien).HasColumnName("MANHANVIEN");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.HasOne(d => d.ManhanvienNavigation)
                    .WithMany(p => p.Taikhoannhanviens)
                    .HasForeignKey(d => d.Manhanvien)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TAIKHOAN_REFERENCE_NHANVIEN");
            });

            modelBuilder.Entity<Thuonghieu>(entity =>
            {
                entity.HasKey(e => e.Mathuonghieu)
                    .IsClustered(false);

                entity.ToTable("THUONGHIEU");

                entity.Property(e => e.Mathuonghieu).HasColumnName("MATHUONGHIEU");

                entity.Property(e => e.Tenthuonghieu)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("TENTHUONGHIEU");

                entity.Property(e => e.Xuatxu)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("XUATXU");
            });

            modelBuilder.Entity<Vanchuyen>(entity =>
            {
                entity.HasKey(e => e.Mavanchuyen)
                    .IsClustered(false);

                entity.ToTable("VANCHUYEN");

                entity.Property(e => e.Mavanchuyen).HasColumnName("MAVANCHUYEN");

                entity.Property(e => e.Sohoadon).HasColumnName("SOHOADON");

                entity.Property(e => e.Trangthai)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("TRANGTHAI");

                entity.HasOne(d => d.SohoadonNavigation)
                    .WithMany(p => p.Vanchuyens)
                    .HasForeignKey(d => d.Sohoadon)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_VANCHUYE_REFERENCE_HOADON");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
