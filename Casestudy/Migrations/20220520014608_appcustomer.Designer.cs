﻿// <auto-generated />
using System;
using Casestudy.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Casestudy.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220520014608_appcustomer")]
    partial class appcustomer
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Casestudy.DAL.DomainClasses.Brand", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<byte[]>("Timer")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasMaxLength(8)
                        .HasColumnType("timestamp");

                    b.HasKey("Id");

                    b.ToTable("Brands");
                });

            modelBuilder.Entity("Casestudy.DAL.DomainClasses.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Firstname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Hash")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lastname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Salt")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("Casestudy.DAL.DomainClasses.Product", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<int>("BrandId")
                        .HasColumnType("int");

                    b.Property<decimal>("CostPrice")
                        .HasColumnType("money");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("GraphicName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<decimal>("MSRP")
                        .HasColumnType("money");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("QtyOnBackOrder")
                        .HasColumnType("int");

                    b.Property<int>("QtyOnHand")
                        .HasColumnType("int");

                    b.Property<byte[]>("Timer")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasMaxLength(8)
                        .HasColumnType("timestamp");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("Casestudy.DAL.DomainClasses.Product", b =>
                {
                    b.HasOne("Casestudy.DAL.DomainClasses.Brand", "Brand")
                        .WithMany()
                        .HasForeignKey("BrandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Brand");
                });
#pragma warning restore 612, 618
        }
    }
}
