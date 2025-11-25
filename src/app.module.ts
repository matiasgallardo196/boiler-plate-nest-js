import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { AppLoggerModule } from './common/logger/logger.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppValidationPipe } from './common/pipes/app-validation.pipe';

@Module({
  imports: [AppLoggerModule, HealthModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_PIPE,
      useClass: AppValidationPipe,
    },
  ],
})
export class AppModule {}
