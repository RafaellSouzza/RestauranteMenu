@echo off

:: Check if Docker is installed
docker --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Docker não está instalado. Instalando Docker...
    
    :: Check if the OS is Windows 10 or higher
    ver | findstr /r "^10\..*" >nul
    IF %ERRORLEVEL% EQU 0 (
        echo Windows 10 ou superior detectado.
        
        :: Install Docker Desktop
        echo Baixando e instalando o Docker Desktop...
        powershell -Command "Invoke-WebRequest -Uri https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe -OutFile DockerDesktopInstaller.exe"
        powershell -Command "Start-Process -Wait -FilePath DockerDesktopInstaller.exe -ArgumentList '/quiet', '/install'"
        
        :: Clean up
        del DockerDesktopInstaller.exe
        
        echo Docker instalado com sucesso. Reinicie o computador para concluir a instalação.
        pause
        exit /b
    ) ELSE (
        echo Versão do Windows não suportada. Por favor, instale o Docker manualmente.
        pause
        exit /b
    )
)

:: Check if Docker Compose is installed
docker-compose --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Docker Compose não está instalado. Instalando Docker Compose...
    
    :: Download Docker Compose
    echo Baixando e instalando Docker Compose...
    powershell -Command "Invoke-WebRequest -Uri https://github.com/docker/compose/releases/download/1.29.2/docker-compose-Windows-x86_64.exe -OutFile %ProgramFiles%\Docker\Docker\resources\bin\docker-compose.exe"
    
    echo Docker Compose instalado com sucesso.
)

:: Build and start the project
echo Construindo e iniciando o projeto...
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up
